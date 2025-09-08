import { Text, Group } from "@mantine/core";
import type { FooterProps } from "../libs/Footer";
export default function Footer({ year, fullName, studentId }: FooterProps) {
  return (
    <Group p="md" justify="center">
      <Text>
        © {year} {fullName} {studentId}
      </Text>
    </Group>
  );
}
