import React from 'react'
import ExampleAvatar from '../../assets/example.svg'
import Button from '@material-ui/core/Button';
import moment from 'moment'
import * as S from './styles';

const Event = ({ event: { event } }) => {
  const startDate = moment(event.start)
  return (
    <S.StyledContainer isFinished={event.extendedProps.isFinished}>
      <S.StyledHeadingContainer>
        <S.StyledHeading>Speaking class</S.StyledHeading>
        <S.StyledAvatarContainer>
          <S.StyledAvatar src={ExampleAvatar} />
          <h2 >Liam</h2>
        </S.StyledAvatarContainer>
      </S.StyledHeadingContainer>
      <h3>Topic: {event.title}</h3>
      <S.StyledEventInformationContainer isFinished={event.extendedProps.isFinished}>
        <S.StyledEventInformation>
          <h3>Date</h3>
          <h3 className='info'>{startDate.format('dddd Do MMMM YYYY')}</h3>
        </S.StyledEventInformation>
        <S.StyledEventInformation>
          <h3>Time</h3>
          <h3 className='info'>{startDate.format('HH:mm')}</h3>
        </S.StyledEventInformation>
        <S.StyledEventInformation>
          <h3>Date</h3>
          <h3 className='info'>{`${event.extendedProps.duration} minutes`}</h3>
        </S.StyledEventInformation>
      </S.StyledEventInformationContainer>
      <Button fullWidth variant="contained" color='primary'>
        { event.extendedProps.isFinished ? 'Watch Recording' : 'Join' }
      </Button>
      <S.StyledMaterialContainer>
        <h3>Material: </h3>
        <div>
          <a target="_blank" href="https://www.youtube.com/watch?v=MfIoAG3e7p4">Video Listening Introduzione</a>
          <a target="_blank" href="https://www.youtube.com/watch?v=LlvBzyy-558">Video Listening Introduzione</a>
        </div>
      </S.StyledMaterialContainer>
    </S.StyledContainer>
  )
}

export default Event