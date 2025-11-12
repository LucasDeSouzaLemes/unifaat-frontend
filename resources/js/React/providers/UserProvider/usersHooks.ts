import { useContext } from "react";
import usersContext from "./UsersContext";

export function useUsersContext() {
    const ctx = useContext(usersContext);
    if (!ctx) throw new Error("useUsersContext deve ser usado dentro de <UsersProvider>");
    return ctx;
}