package Fundamentals;
import java.util.HashMap;

public class Hash {
	public static void main(String[] args) {
		HashMap<String, Integer> hash = new HashMap<String, Integer>();
		hash.put("a", 1);
		hash.put("b", 2);
		hash.put("c", 3);
		hash.put("d", 4);
		hash.put("e", 5);
		
		System.out.println(hash);
		for(String key: hash.keySet()) {
			System.out.println(key + ":" + hash.get(key));
		}
		
	}

}