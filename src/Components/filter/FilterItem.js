import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactActions from "../../redux/contacts/contacts-actions";

function FilterItem({ value, onChangeFilter }) {
  return (
    <div>
      <label className="phonebook-name">
        Find contacts by name
        <br />
        <input
          className="Type-editor-input"
          onChange={onChangeFilter}
          value={value}
          type="text"
        />
      </label>
    </div>
  );
}

FilterItem.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFilter: (evt) =>
    dispatch(contactActions.filterUpdate(evt.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterItem);
