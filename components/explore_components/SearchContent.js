import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { LongPressGestureHandler, State } from "react-native-gesture-handler";

const SearchContent = (props) => {
  const handleLongPress = (imageData) => {
    props.data(imageData);
  };

  const searchData = [
    {
      id: 0,
      images: [
        require("../../assets/posts1.jpg"),
        require("../../assets/posts2.jpg"),
        require("../../assets/posts3.jpg"),
        require("../../assets/posts4.jpg"),
        require("../../assets/posts5.jpg"),
        require("../../assets/posts6.jpg"),
      ],
    },
    {
      id: 1,
      images: [
        require("../../assets/posts7.jpg"),
        require("../../assets/posts8.jpg"),
        require("../../assets/posts9.jpg"),
        require("../../assets/posts10.jpg"),
        require("../../assets/posts11.jpg"),
        require("../../assets/posts12.jpg"),
      ],
    },
    {
      id: 2,
      images: [
        require("../../assets/post13.jpg"),
        require("../../assets/post14.jpg"),
        require("../../assets/post15.jpg"),
      ],
    },
  ];

  return (
    <View>
      {searchData.map((data, index) => {
        return (
          <View key={index}>
            {data.id === 0 ? (
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                {data.images.map((imageData, imgIndex) => {
                  return (
                    <LongPressGestureHandler
                      key={imgIndex}
                      onHandlerStateChange={({ nativeEvent }) => {
                        if (nativeEvent.state === State.ACTIVE) {
                          handleLongPress(imageData);
                        }
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          paddingBottom: 5,
                          paddingRight: 5,
                          width: "33%",
                        }}
                      >
                        <Image
                          source={imageData}
                          style={{
                            width: "100%",
                            height: 150,
                            borderRadius: 15,
                          }}
                        />
                      </TouchableOpacity>
                    </LongPressGestureHandler>
                  );
                })}
              </View>
            ) : null}
            {data.id === 1 ? (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    width: "66.5%",
                    justifyContent: "space-between",
                  }}
                >
                  {data.images.slice(0, 4).map((imageData, imgIndex) => {
                    return (
                      <LongPressGestureHandler
                        key={imgIndex}
                        onHandlerStateChange={({ nativeEvent }) => {
                          if (nativeEvent.state === State.ACTIVE) {
                            handleLongPress(imageData);
                          }
                        }}
                      >
                        <TouchableOpacity
                          style={{
                            paddingBottom: 5,
                            paddingRight: 5,
                            width: "49.5%",
                          }}
                        >
                          <Image
                            source={imageData}
                            style={{
                              width: "100%",
                              height: 150,
                              borderRadius: 15,
                            }}
                          />
                        </TouchableOpacity>
                      </LongPressGestureHandler>
                    );
                  })}
                </View>
                <TouchableOpacity
                  onPressIn={() => props.data(data.images[5])}
                  onPressOut={() => props.data(null)}
                  style={{ marginLeft: 2, width: "33%" }}
                >
                  <Image
                    source={data.images[5]}
                    style={{ width: "100%", height: 300, borderRadius: 15 }}
                  />
                </TouchableOpacity>
              </View>
            ) : null}
            {data.id === 2 ? (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  onPressIn={() => props.data(data.images[2])}
                  onPressOut={() => props.data(null)}
                  style={{ paddingRight: 2, width: "66.5%" }}
                >
                  <Image
                    source={data.images[2]}
                    style={{ width: "100%", height: 300, borderRadius: 15 }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    width: "33%",
                    justifyContent: "space-between",
                  }}
                >
                  {data.images.slice(0, 2).map((imageData, imgIndex) => {
                    return (
                      <LongPressGestureHandler
                        key={imgIndex}
                        onHandlerStateChange={({ nativeEvent }) => {
                          if (nativeEvent.state === State.ACTIVE) {
                            handleLongPress(imageData);
                          }
                        }}
                      >
                        <TouchableOpacity
                          style={{
                            paddingBottom: 5,
                            paddingRight: 5,
                            width: "100%",
                          }}
                        >
                          <Image
                            source={imageData}
                            style={{
                              width: "100%",
                              height: 150,
                              borderRadius: 15,
                            }}
                          />
                        </TouchableOpacity>
                      </LongPressGestureHandler>
                    );
                  })}
                </View>
              </View>
            ) : null}
          </View>
        );
      })}
    </View>
  );
};

export default SearchContent;
