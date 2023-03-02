import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogTitle,
  Grid,
  IconButton,
  List,
  ListItemText,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import { removeFromCart } from "../../redux/actions/actions";

const MyImage = styled("img")`
  width: 60px;
  height: 40px;
`;

const MyListGridContainer = styled(Grid)`
  width: 500px;
  display: flex;
  align-items: center;
`;

const MyListGrid = styled(Grid)`
  text-align: center;
`;

const MyListItemText = styled(ListItemText)`
  flex-grow: 0.5;
  text-align: center;
`;

const MyDialogTitle = styled(DialogTitle)(({ isDark }) => ({
  textAlign: "center",
  backgroundColor: isDark ? "#333232" : "#e0e0e0",
  color: isDark ? "#ffffff" : "#000000",
}));

const MyDialogList = styled(List)(({ isDark }) => ({
  backgroundColor: isDark ? "#333232" : "#e0e0e0",
  color: isDark ? "#ffffff" : "#000000",
}));

const MyDeleteIcon = styled(DeleteIcon)`
  color: #808080;
`;

const SimpleDialog = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.darkThemeReducer.darkTheme);
  const [items] = useState(useSelector((state) => state.addToCartReducer));

  const handleRemoveItem = (index) => {
    dispatch(removeFromCart(index));
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <MyDialogTitle isDark={isDark}>Cart Items</MyDialogTitle>
      <MyDialogList isDark={isDark}>
        {items.map((item, index) => (
          <MyListGridContainer container>
            <MyListGrid item xs={2} style={{ textAlign: "center" }}>
              <MyImage src={item.src} />
            </MyListGrid>
            <MyListGrid item xs={6}>
              <MyListItemText primary={item.name} />
            </MyListGrid>
            <MyListGrid item xs={4}>
              <Button color="primary" variant="contained" size="small">
                View Page
              </Button>
              <IconButton onClick={() => handleRemoveItem(index)}>
                <MyDeleteIcon />
                {index}
              </IconButton>
            </MyListGrid>
          </MyListGridContainer>
        ))}
      </MyDialogList>
    </Dialog>
  );
};

MyDialogTitle.propTypes = {
  isDark: PropTypes.bool.isRequired,
};

MyDialogList.propTypes = {
  isDark: PropTypes.bool.isRequired,
};

SimpleDialog.propType = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SimpleDialog;
