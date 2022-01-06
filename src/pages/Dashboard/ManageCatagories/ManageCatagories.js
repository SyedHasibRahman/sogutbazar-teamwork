import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Container, Modal, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  addCategory,
  deleteCategory,
  loadCategories,
} from "../../../store/adminDashboard";
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  marginTop: "20px",
};

const ManageCatagories = () => {
  let i = 1;
  const dispatch = useDispatch();
  const allCategories = useSelector(
    (state) => state.entities.adminDashboard.categories.allCategories
  );

  // Load Categories from DB
  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete category from DB
        dispatch(deleteCategory(id));

        Swal.fire("Deleted!", "Catagory has been deleted.", "success");
      }
    });
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(addCategory(data));

    if (true) {
      Swal.fire("Good job!", "Catagory Added Successfully.", "success");
      reset();
    }
  };

  return (
    <Box>
      <Typography
        variant="h4"
        style={{ textAlign: "center", color: "green" }}
        gutterBottom
      >
        Add New Catagory
      </Typography>
      <Box sx={{ px: 8, mt: 4, mb: 4 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Catagory Name"
              aria-label="Enter Catagory Name"
              aria-describedby="button-addon2"
              {...register("name", { required: true })}
            />
            <button
              className="btn"
              type="submit"
              id="button-addon2"
              style={{
                backgroundColor: "#262fec",
                color: "#fff",
              }}
            >
              Add
            </button>
          </div>
          {/* {errors.categoryName && (
            <span className="text-danger">
              Please write a valid catagory name!
            </span>
          )} */}
        </form>
      </Box>
      {allCategories.length > 0 ? (
        <Box>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", color: "#001E3C", py: 2 }}
            gutterBottom
          >
            Existing Catagories
          </Typography>
          {allCategories.length > 0 && (
            <TableContainer sx={{ mt: 2 }} component={Paper}>
              <Table aria-label="simple table">
                <TableHead sx={{ background: "#001E3C" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 900, color: "#fff" }}>
                      #
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ fontWeight: 900, color: "#fff" }}
                    >
                      Catagory Name
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ fontWeight: 900, color: "#fff" }}
                    >
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allCategories.map((catagory) => (
                    <TableRow
                      key={catagory?._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {i++}
                      </TableCell>
                      <TableCell align="center">{catagory?.name}</TableCell>
                      <TableCell align="center">
                        <button
                          style={{ border: "none", marginRight: "5px" }}
                          onClick={() => handleDelete(catagory?._id)}
                        >
                          <DeleteIcon sx={{ color: "red" }} />
                        </button>
                        <button onClick={handleOpen} style={{ border: "none" }}>
                          <EditIcon sx={{ color: "blue" }} />
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
      ) : (
        <Box sx={{ mt: 8 }}>
          <Typography
            sx={{
              fontWeight: 700,
              mt: 1,
              color: "red",
              textAlign: "center",
            }}
            variant="h4"
            component="div"
          >
            No Catagory Found!
          </Typography>
        </Box>
      )}

      {/* Modal For Edit Catagory Name */}
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Container>
            <div>
              <h2 className="mb-4">Update Catagory Name</h2>
            </div>

            <form>
              <div className="mb-3">
                <label className="form-label">Catagory Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Catagory Name"
                  // {...register("categoryName", { required: true })}
                />
                {errors.name && (
                  <span className="text-danger">
                    Please enter a catagory name
                  </span>
                )}
              </div>

              <input
                type="submit"
                className="btn btn-primary fw-bold"
                value="Update"
              />
            </form>
          </Container>
        </Box>
      </Modal>
    </Box>
  );
};

export default ManageCatagories;
