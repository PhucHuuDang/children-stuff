"use client";

import React, { useState } from "react";
import PaginationButton from "./pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { data } from "./data";
import Filter from "./filter";  

const statusColors = {
  Canceled: "text-red-500",
  Processing: "text-green-500",
  Delivering: "text-orange-500",
  Refunded: "text-red-500",
  Delivered: "text-blue-500",
};

export const Details: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filterStatus, setFilterStatus] = useState<string>("");
  const itemsPerPage = 8;

  const filteredData = filterStatus
    ? data.filter((item) => item.Status === filterStatus)
    : data;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfFirstItem + itemsPerPage);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (status: string) => {
    setFilterStatus(status);
    setCurrentPage(1);
  };

  return (
    <div>
      <Filter onFilterChange={handleFilterChange} />
      <Table>
        <TableHeader>
          <TableRow className="bg-pink-400 ">
            <TableHead className="font-bold text-base text-white">ID</TableHead>
            <TableHead className="w-[200px] font-bold text-base text-white">Customers</TableHead>
            <TableHead className="font-bold text-base text-white">Product Name</TableHead>
            <TableHead className="font-bold text-base text-white">Quantity</TableHead>
            <TableHead className="font-bold text-base text-white">Prices</TableHead>
            <TableHead className="font-bold text-base text-white">Status</TableHead>
            <TableHead className="font-bold text-base text-white">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentItems.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.ID}</TableCell>
              <TableCell className="font-bold">{item.Customers}</TableCell>
              <TableCell>{item["Product Name"]}</TableCell>
              <TableCell className="w-[150px] pl-10">{item.Quantity}</TableCell>
              <TableCell>{item.Prices}</TableCell>
              <TableCell className={`font-bold w-[180px] ${statusColors[item.Status]}`}>{item.Status}</TableCell>
              <TableCell>{item.Date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <PaginationButton
        data={filteredData}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};
