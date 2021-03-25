import React from "react";

import SearchBar from '../Components/SearchBar';
import DishesTable from '../Components/DishesTable';
import PaginationBar from '../Components/PaginationBar';

const Home = () => {
    return(
        <div align="center">
            <SearchBar />
            <DishesTable />
            <PaginationBar />
        </div>
    )
}

export default Home;