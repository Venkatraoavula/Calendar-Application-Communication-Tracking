export const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
};

export const calculateNextCommunicationDate = (lastDate: Date, periodicity: number): Date => {
    const nextDate = new Date(lastDate);
    nextDate.setDate(lastDate.getDate() + periodicity);
    return nextDate;
};

export const isCommunicationOverdue = (nextDate: Date): boolean => {
    return new Date() > nextDate;
};

export const getCommunicationHighlightColor = (nextDate: Date): string => {
    const today = new Date();
    if (isCommunicationOverdue(nextDate)) {
        return 'red';
    } else if (nextDate.toDateString() === today.toDateString()) {
        return 'yellow';
    }
    return 'transparent';
};