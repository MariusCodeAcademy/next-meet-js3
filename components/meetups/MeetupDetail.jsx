import css from './MeetupDetail.module.css';
const MeetupDetail = (props) => {
  return (
    <section className={css.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
};
export default MeetupDetail;
