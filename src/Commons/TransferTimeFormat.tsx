export default function TransferTimeFormat(timeString: string) {
  return `${timeString?.slice(0, 4)}-${timeString?.slice(
    5,
    7
  )}-${timeString?.slice(8, 10)}`;
}
