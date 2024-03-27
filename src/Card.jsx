import profilePic from './assets/card_img.jpg'

function Card(props){
  return(
    <div className='card'>
      <img className='card-image' src={profilePic} alt="profile picture" />
      <h2 className='card-title'>oxisi</h2>
      <p className='card-text'>Self-taught coder</p>
    </div>
  );
}

export default Card
