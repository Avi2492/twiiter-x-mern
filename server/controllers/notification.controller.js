import Notification from "../models/notification.model.js";

export const getNotfications = async (req, res) => {
  try {
    const userId = req.user._id;

    const notification = await Notification.find({ to: userId }).populate({
      path: "from",
      select: "username profileImg",
    });

    await Notification.updateMany({ to: userId }, { read: true });

    res.status(200).json(notification);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Internal Server error in getNotification controller" });
  }
};

export const deleteNotfications = async (req, res) => {
  try {
    const userId = req.user._id;

    await Notification.deleteMany({ to: userId });

    res.status(200).json({ message: "Notifications deleted successfully!" });
  } catch (error) {
    return res.status(500).json({
      error: "Internal Server error in deleteNotification controller",
    });
  }
};

export const deleteOneNotfications = async (req, res) => {
  try {
    const notificationId = req.params.id;
    const userId = req.user._id;

    const notification = await Notification.findById(notificationId);

    if (!notification) {
      return res.status(404).json({ error: "Notification not found!" });
    }

    if (notification.to.toString() !== userId.toString()) {
      return res
        .status(404)
        .json({ error: "Not allowed to delete the notification" });
    }

    await Notification.findByIdAndUpdate(notificationId);
    res.status(200).json({ message: "Notification deleted successfully!" });
  } catch (error) {
    return res.status(500).json({
      error: "Internal Server error in deleteOneNotification controller",
    });
  }
};
