import React from "react";
import { Dialog, DialogTitle } from "@material-ui/core";
import { useSelector } from "react-redux";

const SimpleDialog = ({ open, onClose }) => {
  const items = useSelector((state) => state.addToCartReducer);
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Card Items</DialogTitle>
    </Dialog>
  );
};

export default SimpleDialog;
