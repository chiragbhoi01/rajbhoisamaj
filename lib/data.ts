
export interface CommitteeMember {
    id: string;
    name: string;
    designation: string;
    village: string;
    photoUrl: string;
}

export interface MatrimonyProfile {
    id: string;
    age: number;
    height: string;
    education: string;
    job: string;
    gotra: string;
    type: "Bride" | "Groom";
}

export interface MatchResult {
    id: string;
    teamA: string;
    teamB: string;
    scoreA: string;
    scoreB: string;
    winner: string;
    date: string;
}

export const COMMITTEE_MEMBERS: CommitteeMember[] = [
    { id: "1", name: "Ramesh Chandra Bhoi", designation: "Adhyaksh (President)", village: "Talwara", photoUrl: "/avatars/1.png" },
    { id: "2", name: "Suresh Saini", designation: "Sachiv (Secretary)", village: "Ghatol", photoUrl: "/avatars/2.png" },
    { id: "3", name: "Dinesh Mali", designation: "Koshadhyaksh", village: "Partapur", photoUrl: "/avatars/3.png" },
    { id: "4", name: "Mukesh Bhoi", designation: "Yuva Adhyaksh", village: "Banswara City", photoUrl: "/avatars/4.png" },
    { id: "5", name: "Rajesh Bhoi", designation: "Samrakshak", village: "Kushalgarh", photoUrl: "/avatars/5.png" },
];

export const MATRIMONY_PROFILES: MatrimonyProfile[] = [
    { id: "P001", age: 24, height: "5'4\"", education: "B.Ed, M.A", job: "Government Teacher", gotra: "Chauhan", type: "Bride" },
    { id: "P002", age: 27, height: "5'10\"", education: "B.Tech (CS)", job: "Software Engineer", gotra: "Solanki", type: "Groom" },
    { id: "P003", age: 23, height: "5'3\"", education: "B.Sc Nursing", job: "Preparing for AIIMS", gotra: "Pawar", type: "Bride" },
    { id: "P004", age: 28, height: "5'11\"", education: "MBA", job: "Bank PO", gotra: "Rathore", type: "Groom" },
];

export const MATCH_RESULTS: MatchResult[] = [
    { id: "M1", teamA: "Talwara Tigers", teamB: "Ghatol Gladiators", scoreA: "145/4", scoreB: "142/9", winner: "Talwara Tigers", date: "2024-01-15" },
    { id: "M2", teamA: "Banswara Royals", teamB: "Partapur Panthers", scoreA: "180/2", scoreB: "120/10", winner: "Banswara Royals", date: "2024-01-16" },
];
