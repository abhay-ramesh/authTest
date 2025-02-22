import { authClient } from "@/auth";
import { Text, View } from "react-native";

export default function Index() {
  const { useSession } = authClient;
  const { data: session } = useSession();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>{JSON.stringify(session)}</Text>
    </View>
  );
}
