export default function ProductRow(props) {
  const name = !props.stocked ?
    <td style={{color: 'red'}}>{props.name}</td> :
    <td>{props.name}</td> ;

  return (
    <tr>
      {name}
      <td>{props.price}</td>
    </tr>
  );
}