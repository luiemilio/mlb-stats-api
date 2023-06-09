import * as https from 'node:https';
import * as querystring from 'node:querystring';
import type {
    Params,
    Sports,
    Teams,
    Endpoints,
    APIResponse,
    Seasons,
    Season,
    Divisions,
    Leagues,
    Standings,
    Team,
    LeagueWithStandings,
    Schedule
} from './MLB';

const fetchJson = async <Endpoint extends Endpoints>(
    endpoint: Endpoint,
    params?: Params,
    urlOverride?: string
): Promise<APIResponse<Endpoint>> => {
    const finalParams = { sportId: 1, ...params };
    const baseUrl = 'https://statsapi.mlb.com/api/v1/';
    const queryString = querystring.stringify(finalParams);
    const url = urlOverride ?? `${baseUrl}${endpoint}?${queryString}`;

    return new Promise((resolve, reject) => {
        https
            .get(url, (response) => {
                let data = '';

                response.on('data', (chunk) => {
                    data += chunk;
                });

                response.on('end', () => {
                    resolve(JSON.parse(data));
                });
            })
            .on('error', (error) => {
                reject(error);
            });
    });
};

export const getSports = async (params?: Params): Promise<Sports> => {
    return fetchJson('sports', params);
};

export const getTeams = async (params?: Params): Promise<Teams> => {
    return fetchJson('teams', params);
};

export const getSeasons = async (params?: Params): Promise<Seasons> => {
    return fetchJson('seasons', params);
};

export const getCurrentSeason = async (): Promise<Season> => {
    return (await getSeasons({ sportId: 1, seasonId: new Date().getFullYear() })).seasons[0];
};

export const getLeagues = async (params?: Params): Promise<Leagues> => {
    return fetchJson('league', params);
};

export const getDivisions = async (params?: Params): Promise<Divisions> => {
    return fetchJson('divisions', params);
};

export const getStandings = async (params?: Params): Promise<Standings> => {
    return fetchJson('standings', params);
};

export const getTeam = async (params?: Params): Promise<Team> => {
    return fetchJson('team', params);
};

export const getCurrentStandings = async (): Promise<LeagueWithStandings[]> => {
    const activeLeagues = (await getLeagues({ sportId: 1 })).leagues.filter(
        (league) => league.active && league.seasonState === 'inseason'
    );

    const activeLeaguesPromises = activeLeagues.map(async (league) => {
        const { id } = league;
        const standings = (await getStandings({ leagueId: id })).records;

        const standingsPromise = standings.map(async (standing) => {
            const division = (await getDivisions({ divisionId: standing.division.id })).divisions[0];

            return {
                ...standing,
                division
            };
        });

        const extendedStandings = await Promise.all(standingsPromise);

        return {
            ...league,
            standings: extendedStandings
        };
    });

    return Promise.all(activeLeaguesPromises);
};

export const getSchedule = async (params?: Params): Promise<Schedule> => {
    return fetchJson('schedule', params);
};