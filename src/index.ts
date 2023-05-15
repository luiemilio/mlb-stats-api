import * as https from 'node:https';
import * as querystring from 'node:querystring';
import type { Params, Sports, Teams, Endpoints, Response, Seasons, Season, Divisions, Leagues } from './types';

const fetchJson = async <Endpoint extends Endpoints>(
    endpoint: Endpoint,
    params?: Params
): Promise<Response<Endpoint>> => {
    const baseUrl = 'https://statsapi.mlb.com/api/v1/';
    const queryString = querystring.stringify(params);
    const url = `${baseUrl}${endpoint}?${queryString}`;

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
            .on('error', reject);
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

(async () => {
    // const sportsData = await getSports();
    // console.log(sportsData.filter(sport => );
    // const mlbId = sportsData.sports.find(sport => sport.code === 'mlb')?.id;
    // const teamsData = await getTeams();
    // const activeMlbTeams = teamsData.teams.filter(team => team.active && team.sport.id === mlbId);
    // console.log(activeMlbTeams.map((team) => team.name));
    // const seasons = await getSeasons({ seasonId: 2023, sportId: 1 });
    // console.log(seasons);
    // const currentSeason = await getCurrentSeason();
    // const mlbDivisions = (await getDivisions({ sportId: 1, divisionId: 205 })).divisions;
    // const activeMlbDivisions = mlbDivisions.filter((division) => division.active);
    // console.log(activeMlbDivisions.length);
    // console.log(activeMlbDivisions);
    // const leagues = (await getLeagues({ sportId: 1 })).leagues;
    // console.log(leagues.filter((league) => league.active && league.seasonState === 'inseason'));
})();
