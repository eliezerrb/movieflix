import { User } from "./user";

export type Review = {
    id: number;
    text: String;
    movieId: number;
    user: User;
};