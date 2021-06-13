import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faQuestionCircle,
  faTag,
} from '@fortawesome/free-solid-svg-icons';

import 'css/TglBtn.css';

const IconByType = (props: any) => {
  const { type, like } = props;
  const defaultIcon = {
    heart: (
      <FontAwesomeIcon
        className="tgl-btn-icon"
        icon={faHeart}
        style={{ color: 'lightgray' }}
      />
    ),
    wonder: (
      <FontAwesomeIcon
        className="tgl-btn-icon"
        icon={faQuestionCircle}
        style={{ color: 'lightgray' }}
      />
    ),
    scrap: (
      <FontAwesomeIcon
        className="tgl-btn-icon"
        icon={faTag}
        style={{ color: 'lightgray' }}
      />
    ),
  };
  const pressIcon = {
    heart: (
      <FontAwesomeIcon
        className="tgl-btn-icon"
        icon={faHeart}
        style={{ color: 'salmon' }}
      />
    ),
    wonder: (
      <FontAwesomeIcon
        className="tgl-btn-icon"
        icon={faQuestionCircle}
        style={{ color: 'yellowgreen' }}
      />
    ),
    scrap: (
      <FontAwesomeIcon
        className="tgl-btn-icon"
        icon={faTag}
        style={{ color: 'skyblue' }}
      />
    ),
  };
  return <div>{like ? pressIcon[type] : defaultIcon[type]}</div>;
};

const TglBtn = (props: any) => {
  const { type, count, handler } = props;
  const [like, setLike] = useState<boolean>(false);
  const [curCount, setCount] = useState<number>(0);

  useEffect(() => {
    setCount(count);
  }, [count]);

  const onToggleButton = () => {
    setLike(!like);
    if (!like) {
      setCount(curCount + 1);
    } else {
      setCount(curCount - 1);
    }
    handler();
  };

  return (
    <div>
      <button type="button" className="tgl-btn" onClick={onToggleButton}>
        <IconByType type={type} like={like} /> {curCount}
      </button>
    </div>
  );
};
export default TglBtn;
