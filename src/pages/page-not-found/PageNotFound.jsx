import Link from '../../components/UI/link/Link';

import {
  FoundContainerStyled,
  FoundTextStyled,
  FoundTitleStyled,
} from './PageNotFoundStyles';

const PageNotFound = () => {
  return (
    <div>
      <FoundContainerStyled>
        <FoundTextStyled>
          <FoundTitleStyled>404 Error</FoundTitleStyled>
          <Link />
        </FoundTextStyled>
      </FoundContainerStyled>
    </div>
  );
};

export default PageNotFound;
