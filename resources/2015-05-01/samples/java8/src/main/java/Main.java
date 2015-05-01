import java.util.List;
import java.util.Map;
import java.util.Random;
import static java.util.stream.Collectors.*;
import static java.util.stream.IntStream.range;

public class Main {
    public static void main(String[] args) {
        range(0, 100)
                .mapToObj(i -> randomString(new Random(), 'A', 'Z', 10))
                .sorted()
                .collect(groupingBy(name -> name.charAt(0)))
                .forEach((letter, names) -> System.out.println(letter + "\n\t" + names.stream().collect(joining("\n\t"))));
    }

    public static String randomString(Random r, char from, char to, int length) {
        return r.ints(from, to + 1)
            .limit(length)
            .mapToObj(x -> Character.toString((char)x))
            .collect(joining());
    }

}