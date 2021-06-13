import React from 'react';
import TglBtn from 'Commons/TglBtn';

import 'css/TglBtn.css';

const App = () => {
  const tempstr = 'HOME입니다';

  const onUpdateSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Api 를 업데이트');
  };

  return (
    <div>
      {tempstr}
      <div className="btn-area">
        <TglBtn type="heart" count={10} handler={onUpdateSubmit} />
        <TglBtn type="wonder" count={20} handler={onUpdateSubmit} />
        <TglBtn type="scrap" count={30} handler={onUpdateSubmit} />
      </div>
      <div className="btn-area">
        <TglBtn type="wonder" count={70} handler={onUpdateSubmit} />
        <TglBtn type="heart" count={25} handler={onUpdateSubmit} />
        <TglBtn type="scrap" count={30} handler={onUpdateSubmit} />
      </div>
    </div>
  );
};

export default App;
