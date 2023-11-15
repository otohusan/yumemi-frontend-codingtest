// グラフで使う線のdotを作成して、配列で返してる
const circle = ({
  cx,
  cy,
  stroke,
}: {
  cx: number;
  cy: number;
  stroke: string;
}): JSX.Element => <circle cx={cx} cy={cy} r={5} fill={stroke} />;

const square = ({
  cx,
  cy,
  stroke,
}: {
  cx: number;
  cy: number;
  stroke: string;
}): JSX.Element => (
  <rect x={cx - 5} y={cy - 5} width={10} height={10} fill={stroke} />
);

const triangle = ({
  cx,
  cy,
  stroke,
}: {
  cx: number;
  cy: number;
  stroke: string;
}): JSX.Element => (
  <path
    d={`M${cx - 5} ${cy + 5} L${cx} ${cy - 5} L${cx + 5} ${cy + 5} Z`}
    fill={stroke}
  />
);

const cross = ({
  cx,
  cy,
  stroke,
}: {
  cx: number;
  cy: number;
  stroke: string;
}): JSX.Element => (
  <>
    <rect x={cx - 1} y={cy - 5} width={2} height={10} fill={stroke} />
    <rect x={cx - 5} y={cy - 1} width={10} height={2} fill={stroke} />
  </>
);

const CustomLineDots = [circle, square, triangle, cross];

export default CustomLineDots;
