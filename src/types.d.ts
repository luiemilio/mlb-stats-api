type Params = {
    sportId?: number;
    season?: string;
    activeStatus?: boolean;
    leagueIds?: number[];
    sportIds?: number[];
    gameType?: string;
    seasonId?: number;
    divisionId?: number;
    leagueId?: number;
    seasonState?: string;
    active?: boolean;
    gamePk?: number;
    startDate?: string;
    endDate?: string;
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

type Division = {
    id: number;
    name: string;
    season: string;
    nameShort: string;
    link: string;
    abbreviation: string;
    league: {
        id: number;
        link: string;
    };
    sport: {
        id: number;
        link: string;
    };
    hasWildcard: boolean;
    sortOrder: number;
    numPlayoffTeams: number;
    active: true;
};

type Divisions = Base & {
    divisions: Division[];
};

type League = {
    id: number;
    name: string;
    link: string;
    abbreviation: string;
    nameShort: string;
    seasonState: string;
    hasWildCard: boolean;
    hasSplitSeason: boolean;
    seasonDateInfo: Season;
    season: string;
    orgCode: string;
    conferencesInUse: boolean;
    divisionsInUse: boolean;
    sport: {
        id: number;
        link: string;
    };
    sortOrder: number;
    active: boolean;
};

type Leagues = Base & {
    leagues: League[];
};

type Record = {
    wins: number;
    losses: number;
    type: string;
    pct: string;
};

type TeamRecord = {
    team: {
        id: number;
        name: string;
        link: string;
    };
    season: string;
    streak: {
        streakType: string;
        streakNumber: number;
        streakCode: string;
    };
    divisionRank: string;
    leagueRank: string;
    wildCardRank: string;
    sportRank: string;
    gamesPlayed: number;
    gamesBack: string;
    wildCardGamesBack: string;
    leagueGamesBack: string;
    springLeagueGamesBack: '-';
    sportGamesBack: string;
    divisionGamesBack: string;
    conferenceGamesBack: string;
    leagueRecord: {
        wins: number;
        losses: number;
        ties: number;
        pct: string;
    };
    lastUpdated: string;
    records: {
        splitRecords: Record[];
        divisionRecords: Record[];
        overallRecords: Record[];
        leagueRecords: Record[];
        expectedRecords: Record[];
    };
    runsAllowed: number;
    runsScored: number;
    divisionChamp: boolean;
    divisionLeader: boolean;
    hasWildcard: boolean;
    clinched: boolean;
    eliminationNumber: string;
    wildCardEliminationNumber: string;
    wins: number;
    losses: number;
    runDifferential: number;
    winningPercentage: string;
};

type Standing = {
    standingsType: string;
    league: {
        id: number;
        link: string;
    };
    division: {
        id: number;
        link: string;
    };
    sport: {
        id: number;
        link: string;
    };
    lastUpdated: string;
    teamRecords: TeamRecord[];
};

type Standings = Base & {
    records: Standing[];
};

type LeagueWithStandings = League & {
    standings: Array<
        Standing & {
            division: Division;
        }
    >;
};

type TeamGameInfo = {
    leagueRecord: {
        wins: 'string';
        losses: 'string';
        pct: 'string';
    };
    score: number;
    team: {
        id: number;
        name: 'string';
        link: 'string';
    };
    isWinner: boolean;
    splitSquad: boolean;
    seriesNumber: number;
}

type Game = {
    gamePk: number;
    link: 'string';
    gameType: 'string';
    season: 'string';
    gameDate: 'string';
    officialDate: 'string';
    status: {
        abstractGameState: 'string';
        codedGameState:	'string';
        detailedState: 'string';
        statusCode:	'string';
        startTimeTBD: boolean;
        abstractGameCode: 'string';
    };
    teams: {
        away: TeamGameInfo;
        home: TeamGameInfo;
    };
    venue: {
        id: number;
        name: 'string';
        link: 'string';
    };
    content: {
        link: 'string';
    };
    isTie:	boolean;
    gameNumber:	number;
    publicFacing: boolean;
    doubleHeader: string;
    gamedayType: string;
    tiebreaker:	string;
    calendarEventID: string;
    seasonDisplay: string;
    dayNight: string;
    scheduledInnings: number;
    reverseHomeAwayStatus:	boolean;
    inningBreakLength: number;
    gamesInSeries: number;
    seriesGameNumber: number;
    seriesDescription: string;
    recordSource: string;
    ifNecessary: string;
    ifNecessaryDescription:	string;
};

type TotalGamesInfo = {
    totalItems: number;
    totalEvents: number;
    totalGames: number;
    totalGamesInProgress: number;
}

type DailySchedule = TotalGamesInfo & {
    date: 'string';
    games: Game[];
};

type Schedule = Base & TotalGamesInfo & {
    dates: DailySchedule[];
};

type Endpoints = 'sports' | 'teams' | 'seasons' | 'standings' | 'divisions' | 'league' | 'team' | 'schedule';
type Response<Endpoint> = Endpoint extends 'sports'
    ? Sports
    : Endpoint extends 'teams'
    ? Teams
    : Endpoint extends 'seasons'
    ? Seasons
    : Endpoint extends 'standings'
    ? Standings
    : Endpoint extends 'divisions'
    ? Divisions
    : Endpoint extends 'league'
    ? Leagues
    : Endpoint extends 'team'
    ? Team
    : Endpoint extends 'schedule'
    ? Schedule
    : never;
