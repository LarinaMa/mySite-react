function Body({ component }) {
  return (
    <div id="body">
      <img src={component.comp_Img} />
      <p>{component.text}</p>
    </div>
  );
}
export default Body;
