// default integration (e.g messenger.com, ...)
module.exports = (Franz) => {
    const getMessages = () => {
        const unreadConversations = document.querySelectorAll('.con-avatar.unread').length;
        const mutedConversations = document.querySelectorAll('.con-avatar.unread > .muted').length;
        Franz.setBadge(unreadConversations - mutedConversations);
    }

    Franz.loop(getMessages);
};
