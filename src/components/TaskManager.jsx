import React from 'react';
import Header from "./Header";
import List from "./List";

export default function TaskManager() {
    return (
        <div className={"main"}>
            <Header />
            <List />
        </div>
    )
}
