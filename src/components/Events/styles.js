import { makeStyles } from '@material-ui/core/styles'
import styled, { css } from 'styled-components'

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column'
  },
  textField: {
    marginBottom: theme.spacing(2)
  },
  footer: {
    display: 'flex',
    justifyContent: 'end',
    marginTop: '20px'
  }
}));

export const StyledContainer = styled.div`
  padding: 10px;

  h3, h1 {
    margin: 0;
  }

  button {
   color: white;
   margin-top: 20px;
   border-radius: 11px;
   text-transform: uppercase;

   ${({ isFinished }) => isFinished && css`
      background-color: #8065C9;
   `}
  }
`

export const StyledHeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledHeading = styled.h1`
  font-size: 30px;
  font-weight: bold;
`

export const StyledAvatarContainer = styled.div`
  display: flex;
  align-items: center;
`

export const StyledAvatar = styled.img`
  object-fit: cover;
  width: 60px;
  height: 60px;
  margin-right: 10px;
`

export const StyledEventInformationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  ${({ isFinished }) => isFinished && css`
    .info {
      color: #8065C9 !important;
    }
  `}
`

export const StyledEventInformation = styled.div`
  display: flex;
  flex-direction: column;

  .info {
    color: #D4145A;
    font-weight: bold;
  }
`

export const StyledMaterialContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;


  div {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;

    a {
      color: black;
      text-decoration: revert;
    }
  }
`
