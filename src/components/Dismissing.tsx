interface Props {
  onclose: () => void;
}

const Dismissing = ({ onclose }: Props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>Hey,</strong> these is ALERT message.
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onclose}
      ></button>
    </div>
  );
};

export default Dismissing;
