type Params = {
    sportId?: number;
    season?: string;
    activeStatus?: boolean;
    leagueIds?: number[];
    sportIds?: number[];
    gameType?: string;
    seasonId?: number;
};

type Base = {
    copyright: string;
};

type Sport = {
    id: number;
    code: string;
    link: string;
    name: string;
    abbreviation: string;
    sortOrder: number;
    activeStatus: boolean;
};

export type Sports = Base & {
    sports: Sport[];
};

type Team = {
    allStarStatus: string;
    id: number;
    name: string;
    link: string;
    season: number;
    venue: {
        id: number;
        name: string;
        link: string;
    };
    teamCode: string;
    fileCode: string;
    abbreviation: string;
    teamName: string;
    locationName: string;
    firstYearOfPlay: string;
    league: {
        id: number;
        name: string;
        link: string;
    };
    division: {
        id: number;
        name: string;
        link: string;
    };
    sport: {
        id: number;
        link: string;
        name: string;
    };
    shortName: string;
    parentOrgName: string;
    parentOrgId: number;
    franchiseName: string;
    clubName: string;
    active: true;
};

type Teams = Base & {
    teams: Team[];
};

type Season = {
    seasonId: string;
    hasWildcard: true;
    preSeasonStartDate: string;
    preSeasonEndDate: string;
    seasonStartDate: string;
    springStartDate: string;
    springEndDate: string;
    regularSeasonStartDate: string;
    lastDate1stHalf: string;
    allStarDate: string;
    firstDate2ndHalf: string;
    regularSeasonEndDate: string;
    postSeasonStartDate: string;
    postSeasonEndDate: string;
    seasonEndDate: string;
    offseasonStartDate: string;
    offSeasonEndDate: string;
    seasonLevelGamedayType: string;
    gameLevelGamedayType: string;
    qualifierPlateAppearances: 3.1;
    qualifierOutsPitched: 6000;
};

type Seasons = Base & {
    seasons: Season[];
};

export type Endpoints = 'sports' | 'teams' | 'seasons';
export type Response<Endpoint> = Endpoint extends 'sports' ? Sports : Endpoint extends 'teams' ? Teams : never;
