import React from "react";
import { View, StyleSheet } from "react-native";
import RuhGudusu from "../ruhGudusu/RuhGudusu";
import HareketsizBenlik from "../hareketsizBenlik/HareketsizBenlik";
import KaderSayisi from "../kaderSayisi/KaderSayisi";
import ChakraSutunu from "../chakraSutunu/ChackraSutunu";
import EsmaulHusna from "../esmaulHusna/EsmaulHusna";
import AuraRengi from "../auraRengi/AuraRengi";
import HayatAmaci from "../hayatAmaci/HayatAmaci";
import ZirveNumaralari from "../zirveNumaralari/ZirveNumaralari";
import MucadeleNumaralari from "../mucadeleNumaralari/MucadeleNumaralari";

const InfoBox = ({
  mainLaneData,
  sideLaneData,
  fonLaneData,
  chakraCounts,
  esmaulHusnaResult,
  auraColor,
  colorDescription,
  colorPotantial,
  purposeID,
  purposeTitle,
  purposeDescription,
  matchedPeaks,
  matchedStruggles,
}) => {
  return (
    <>
      <View style={styles.container}>
        <RuhGudusu
          key={1}
          title={mainLaneData?.title}
          content={mainLaneData?.content}
          yapiciPotansiyeller={mainLaneData?.yapiciPotansiyeller}
          olumsuzPotansiyeller={mainLaneData?.olumsuzPotansiyeller}
          yikiciPotansiyeller={mainLaneData?.yikiciPotansiyeller}
        />
      </View>
      <View style={styles.container}>
        <HareketsizBenlik
          key={2}
          title={sideLaneData?.title}
          description={sideLaneData?.description}
        />
      </View>
      <View style={styles.container}>
        <KaderSayisi
          key={3}
          title={fonLaneData?.title}
          description={fonLaneData?.description}
        />
      </View>
      <View style={styles.container}>
        <ChakraSutunu key={4} chakraCounts={chakraCounts} />
      </View>
      <View style={styles.container}>
        <EsmaulHusna key={5} esmaulHusnaResult={esmaulHusnaResult.toString()} />
      </View>
      <View style={styles.container}>
        <AuraRengi
          key={6}
          auraColor={auraColor}
          colorDescription={colorDescription}
          colorPotantial={colorPotantial}
        />
      </View>
      <View style={styles.container}>
        <HayatAmaci
          key={7}
          purposeID={purposeID}
          purposeTitle={purposeTitle}
          purposeDescription={purposeDescription}
        />
      </View>
      <View style={styles.container}>
        <ZirveNumaralari key={8} matchedPeaks={matchedPeaks} />
      </View>
      <View style={styles.container}>
        <MucadeleNumaralari key={9} matchedStruggles={matchedStruggles} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#8576FF10",
    borderRadius: 16,
  },
});

export default InfoBox;
