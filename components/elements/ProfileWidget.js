function ProfileWidget() {
    const profileWidgetList = [
        {
            icon: "ri-user-settings-line",
            title: "My Profile",
            text: "Account Setting Profile",
            bgColor:"primary",
            textColor:"primary"

        },
        {
            icon: "ri-message-2-line",
            title: "My Message",
            text: "Inbox & Drafts",
            bgColor:"warning",
            textColor:"warning"
        },
        {
            icon: "ri-pulse-line",
            title: "My Activity",
            text: "Logs & Notification",
            bgColor:"success",
            textColor:"success"
        },
        {
            icon: "ri-stack-line",
            title: "My Course",
            text: "90 Courses",
            bgColor:"danger",
            textColor:"danger"
        },
    ];

    return (
        <>
            {profileWidgetList.map((item, id) => (
                <>
                    <div className="col-md-6 col-xl-12" key={id}>
                    <div className="bg-white py-12 px-12 rounded d-flex mb-20 justify-content-between align-items-center align-items-center shadow-sm">
                        <div className={`profile-widget-icon me-15 fs-24 d-flex justify-content-center align-items-center rounded-circle bg-${item.bgColor}-lighten text-${item.textColor}`}>
                            <i class={item.icon}></i>
                        </div>
                        <div className="flex-grow-1">
                            <h6 className="mb-1">{item.title}</h6>
                            <p className="mb-0">{item.text}</p>
                        </div>
                    </div>
                    </div>
                </>
            ))}
        </>
    );
}
export default ProfileWidget;
