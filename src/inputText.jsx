import React, { useContext, useState, useEffect } from "react";
import styles from "./inputText.module.css";
import { GrpContext } from "./GrpContext";
import vector from "./assets/Vector.png";

function InputText() {
    const { createGrps, selectGrpIndex } = useContext(GrpContext);

    const [putinChat, setPutinChat] = useState("");
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        const storeMessages = localStorage.getItem("messages");
        if (storeMessages) {
            setMessages(JSON.parse(storeMessages));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("messages", JSON.stringify(messages));

    }, [messages]);

    const handleTextClick = () => {
        if (putinChat.trim() !== "") {
            const group = createGrps[selectGrpIndex];
            const { groupName } = group;
            const presentDate = new Date();
            const monthNames = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ];
            const month = monthNames[presentDate.getMonth()];
            const day = presentDate.getDate();
            const year = presentDate.getFullYear();
            const presentTime = presentDate.toLocaleTimeString();

            const newMessage = {
                text: putinChat,
                date: `${month} ${day} ,${year}`,
                time: presentTime,
                groupName: groupName,
            };
            setMessages((previousMessages) => [...previousMessages, newMessage]);
            setPutinChat("");
        }

    };
    const hdlKeyDwn = (e) => {
        if (e.key === "Enter") {
            handleTextClick();
        }
    };
    if (selectGrpIndex !== null) {
        const group = createGrps[selectGrpIndex];
        const { groupName, selectColor, selectImage } = group;
        const grpMeassages = messages.filter(
            (message) => message.groupName === groupName
        );


        return (
            <>
                <div className={styles.rightside}>
                    <div className={styles.upper}>

                        <div className={styles.inUpper}>
                            <span className={styles.caps}>
                                {group.groupName.slice(0, 2).toUpperCase()}
                            </span>
                            <p>{selectColor}</p>
                            {selectImage && (
                                <img
                                    src={selectImage}
                                    className={styles.roundImage}
                                    alt="selected"
                                />
                            )}
                            <h2 className={styles.textt}>{groupName}</h2>
                        </div>
                    </div>

                    <div className={styles.textWrap}></div>
                    <div className={styles.scroll}>
                        {grpMeassages.map((message, index) => (
                            <div key={index} className={styles.message}>
                                <div className={styles.dataTime}>
                                    <p className={styles.ttime}>{message.time}</p>
                                    <p className={styles.tdate}>{message.date}</p>
                                </div>
                                <div className={styles.text_wrap}>
                                    <p className={styles.tmsg}>{message.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                <div className={styles.tBox}>
                    <input
                        type="text"
                        className={styles.in_chat}
                        placeholder="Enter the text here.........."
                        value={putinChat}
                        onChange={(e) => setPutinChat(e.target.value)}
                        onKeyDown={hdlKeyDwn}
                    />
                    <img
                        src={vector}
                        alt=""
                        className={styles.vector}
                        onClick={handleTextClick}
                    />

                </div>




            </>
        );
    }

    return null;
}

export default InputText;