export const formatTime = (dateTime: string): string => {
    const date = new Date(dateTime);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes.toString();
    return `${hours}:${formattedMinutes} ${ampm}`;
};

export const formatDate = (dateTime: string): string => {
    const date = new Date(dateTime);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const dayName = date.toLocaleString('default', { weekday: 'long' });

    return `${day} ${month}, ${dayName}`;
};