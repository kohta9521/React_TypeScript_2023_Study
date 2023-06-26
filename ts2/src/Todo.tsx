
const Todo = (props) => {
  const { title, userid } = props;
  return <p>{`${title}(ユーザー${userid})`}</p>
}

export default Todo;