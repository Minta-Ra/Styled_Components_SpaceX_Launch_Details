import styled from 'styled-components'

const Paragraph = styled.p`
pargin: 0;
padding: 1em;
background-color: #ced7e0;
color: #062c43;
`

// Inheriting from Paragraph and has more features
const BigParagraph = styled(Paragraph)`
  font-size: 1.5em;
  padding: 0.5em;
  border-bottom: 1px solid #062c43;
`

const LaunchDetails = ({launch}) => {

  if (!launch){
    return <p>Loading...</p>
  }

  return (
    <>
      <BigParagraph>{launch.mission_name}</BigParagraph>
      <Paragraph>Flight Number: {launch.flight_number}</Paragraph>
      <Paragraph>Year: {launch.launch_year}</Paragraph>
      <Paragraph>Rocket: {launch.rocket.rocket_name}</Paragraph>
      <Paragraph>Details of launch: {launch.details}</Paragraph>
      <img src={launch.links.mission_patch} height="250"/>
    </>
  )

}

export default LaunchDetails;