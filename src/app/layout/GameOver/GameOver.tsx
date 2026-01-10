export default function GameOver({
  winner,
  onClose,
}: {
  winner: string | null;
  onClose: () => void;
}) {
  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/90
      "
    >
      <div
        className="
          relative
          w-full h-full
          p-6
          overflow-auto
        "
      >
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4
            rounded-full
            bg-slate-100
            px-3 py-1
            text-sm
            text-black
            cursor-pointer
            hover:bg-slate-200
          "
        >
          ✕
        </button>

        <div className="flex flex-col justify-center items-center h-full">
          <h2 className="text-4xl font-semibold mb-4">Game over</h2>

          {winner ? <p>You won, {winner}!</p> : <p>It's a draw</p>}
        </div>
      </div>
    </div>
  );
}
