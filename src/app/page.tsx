import L_UserAction from "./components/L_UseAction";

export default function Home() {
  return (
    <div >
      <L_UserAction itemTitle="Item 1" itemId={1} />
      <L_UserAction itemTitle="Item 2" itemId={2} />
    </div>
  );
}
