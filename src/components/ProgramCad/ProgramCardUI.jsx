import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProgramCard.css';

export default function ProgramCardUI(props) {
  const { imgno, title, des,link } = props;

  return (
    <div className='program '>
      <div className={`image-section ${imgno}`}></div>
      <div className='content'>
        <h2 className='cdtitle'>{title}</h2>
        <p className='card-text'>{des}</p>
        <Link to={link}>
          <button>Continue</button>
        </Link>
      </div>
    </div>
  );
}

ProgramCardUI.propTypes = {
  imgno: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  des: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
