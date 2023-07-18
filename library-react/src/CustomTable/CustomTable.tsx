import { Box, IconButton, Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from "@mui/material";
import React from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import PlagiarismTwoToneIcon from "@mui/icons-material/PlagiarismTwoTone";

type TableColumnType<T, K extends keyof T> = {
  property: K;
  title: string;
};

type CustomTableParamsType<T> = {
  rows: T[];
  columns: TableColumnType<T, keyof T>[];
  loading: boolean;
  page: number;
  onClickPrevPage?: () => void;
  onClickNextPage?: () => void;
  disablePrev: boolean;
  disableNext: boolean;
  onSelectElement?: (element: T, index: number) => void;
};

const CustomTable = <T extends object>({ rows, columns, loading, page, onClickPrevPage, onClickNextPage, disablePrev, disableNext, onSelectElement }: CustomTableParamsType<T>) => {
  const theme = useTheme();
  const mock = [1, 2, 3, 4, 5];

  return (
    <>
      <TableContainer sx={{ borderRadius: 0 }}>
        <Table sx={{ borderCollapse: "collapse", borderRadius: 0 }}>
          <TableHead>
            <TableRow>
              {loading ? (
                columns.map((column, index) => {
                  return (
                    <TableCell key={index} sx={{ border: "1px solid black", background: theme.palette.primary.main }} align="left">
                      <Skeleton></Skeleton>
                    </TableCell>
                  );
                })
              ) : (
                <>
                  <TableCell sx={{ border: 0 }}></TableCell>
                  {columns.map((column, index) => {
                    return (
                      <TableCell key={index} sx={{ border: "1px solid black", background: theme.palette.primary.main }} align="left">
                        <Typography color="white">{column.title}</Typography>
                      </TableCell>
                    );
                  })}
                </>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {loading
              ? mock.map((x, indexRow) => (
                  <TableRow key={indexRow}>
                    {columns.map((column, index) => {
                      return (
                        <TableCell key={index + ';' + indexRow} sx={{ border: "1px solid black" }} align="left">
                          <Skeleton></Skeleton>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))
              : rows.map((row, indexRow) => (
                  <TableRow key={indexRow}>
                    <TableCell sx={{ border: 0, margin: 0, padding: 0 }}>
                      <IconButton
                        onClick={() => {
                          if (onSelectElement) {
                            onSelectElement(row, indexRow);
                          }
                        }}
                      >
                        <PlagiarismTwoToneIcon color="primary"></PlagiarismTwoToneIcon>
                      </IconButton>
                    </TableCell>
                    {columns.map((column, index) => {
                      return (
                        <TableCell key={index + "" + indexRow} sx={{ border: "1px solid black" }} align="left">
                          <Typography>{row[column.property]}</Typography>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
      {loading ? (
        <></>
      ) : (
        <Box marginTop={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <IconButton
            disabled={disablePrev}
            sx={{ opacity: disablePrev ? "0.3" : "1" }}
            onClick={() => {
              if (onClickPrevPage) onClickPrevPage();
            }}
          >
            <ArrowCircleLeftIcon color="primary" sx={{ fontSize: "1.5em", cursor: "pointer" }}></ArrowCircleLeftIcon>
          </IconButton>
          <Typography marginX={1} variant="h6">
            {page}
          </Typography>
          <IconButton
            disabled={disableNext}
            sx={{ opacity: disableNext ? "0.3" : "1" }}
            onClick={() => {
              if (onClickNextPage) onClickNextPage();
            }}
          >
            <ArrowCircleRightIcon color="primary" sx={{ fontSize: "1.5em", cursor: "pointer" }}></ArrowCircleRightIcon>
          </IconButton>
        </Box>
      )}
    </>
  );
};

export { CustomTable };
export type { TableColumnType };
