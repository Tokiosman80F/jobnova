import PropTypes from "prop-types";

const SectionTitle = ({ title, subtitle, textAlign = "center" }) => {
  return (
    <div className={`text-${textAlign}  mx-auto my-16`}>
      <h1 className=" text-3xl mb-5 text-gray-800 font-semibold capitalize">
        {title}
      </h1>
      <p className="text-gray-600  ">{subtitle}</p>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  textAlign: PropTypes.oneOf(["center", "left", "right"]),
};

export default SectionTitle;
