import React from "react";
import { Text, Dimensions, StyleSheet, View } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import SwipeLevel from "./SwipeLevel";

import defaultStyles from "../config/Styles";

const App = ({ item }) => (
  console.log(item),
  (
    <View style={styles.container}>
      <SwiperFlatList
        snapToAlignment="center"
        pagingEnabled
        autoplayDirection="horizontal"
        autoplay
        autoplayDelay={3}
        autoplayLoop
        paginationDefaultColor={defaultStyles.colors.Gray_color_medium}
        paginationActiveColor={defaultStyles.colors.primary}
        paginationStyleItemActive={styles.activeDot}
        paginationStyleItemInactive={styles.inActiveDot}
        paginationStyle={{ bottom: 20 }}
        showPagination
        data={item}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SwipeLevel style={styles.child} item={item} />
        )}
      />
    </View>
  )
);
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  child: { width: width - 30, justifyContent: "center" },
  activeDot: {
    backgroundColor: defaultStyles.colors.primary,
    width: 15,
    height: 6,
    borderRadius: 10,
    marginHorizontal: 3,
  },
  inActiveDot: {
    width: 6,
    height: 6,
    borderRadius: 10,
    backgroundColor: defaultStyles.colors.Gray_color_medium,
    marginHorizontal: 3,
  },
});
export default App;
