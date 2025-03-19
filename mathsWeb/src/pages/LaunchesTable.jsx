import React, { useEffect, useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
  TablePagination,
} from "@mui/material";
import axios from "axios";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  color: theme.palette.text.primary,
  textAlign: "center",
}));


function LaunchesTable() {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    const fetchLaunches = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://api.spacexdata.com/v4/launches"
        );
        setLaunches(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch launch data");
        setLoading(false);
        console.error("Error fetching launches:", err);
      }
    };

    fetchLaunches();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
     <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h4" gutterBottom>
        SpaceX Launches
      </Typography>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Mission Patch</TableCell>
                <TableCell>Mission Name</TableCell>
                <TableCell>Launch Date</TableCell>
                <TableCell>Rocket</TableCell>
                <TableCell>Launch Site</TableCell>
                <TableCell>Success</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {launches
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((launch) => (
                  <TableRow key={launch.id}>
                    <TableCell>
                      <img
                        src={launch.links.patch.small}
                        alt={launch.name}
                        style={{ width: 50, height: 50 }}
                      />
                    </TableCell>
                    <TableCell>{launch.name}</TableCell>
                    <TableCell>
                      {new Date(launch.date_utc).toLocaleDateString()}
                    </TableCell>
                    <TableCell>{launch.rocket}</TableCell>
                    <TableCell>{launch.launchpad}</TableCell>
                    <TableCell>
                      {launch.success ? (
                        <Typography color="success">Yes</Typography>
                      ) : (
                        <Typography color="error">No</Typography>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={launches.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

export default LaunchesTable;
