interface MainLaneData {
  title: string;
  content: string;
  yapiciPotansiyeller: string[];
  olumsuzPotansiyeller: string[];
  yikiciPotansiyeller: string[];
}

interface MainLaneDataCollection {
  [key: number]: MainLaneData;
}
