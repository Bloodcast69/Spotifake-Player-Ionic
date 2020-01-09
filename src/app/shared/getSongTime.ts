export function getSongTime(time: number): { minutes: string | number, seconds: string | number, fullTime: string } {
    const minutes = parseInt(String(time / 60), 10);
    const seconds = time % 60;
    const returnMinutes = minutes < 10 ? '0' + minutes : minutes;
    const returnSeconds = seconds < 10 ? '0' + seconds : seconds;
    return {
        minutes: returnMinutes,
        seconds: returnSeconds,
        fullTime: `${minutes}:${seconds}`
    };
}
