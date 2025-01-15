export function ResetButton({ onClick }) {
  return (
    <button
      className="cursor-pointer mt-2 bg-transparent border border-gray-500 px-3 py-1 rounded"
      onClick={onClick}
    >
      Сбросить
    </button>
  );
}
