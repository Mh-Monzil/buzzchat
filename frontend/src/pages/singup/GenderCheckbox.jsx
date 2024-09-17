import PropTypes from 'prop-types';

const GenderCheckbox = ({onGenderChange, selectedGender}) => {
  return (
    <div className="flex my-2.5">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-sm checkbox-accent"
            checked={selectedGender === "Male"}
            onChange={() => onGenderChange("Male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-sm checkbox-accent"
            checked={selectedGender === "Female"}
            onChange={() => onGenderChange("Female")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">Others</span>
          <input
            type="checkbox"
            className="checkbox checkbox-sm checkbox-accent"
            checked={selectedGender === "Others"}
            onChange={() => onGenderChange("Others")}
          />
        </label>
      </div>
    </div>
  );
};

GenderCheckbox.propTypes = {
    onGenderChange: PropTypes.func,
    selectedGender: PropTypes.string,
}

export default GenderCheckbox;
