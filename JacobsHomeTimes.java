//This program creates random work outs from a given list of workouts
import java.util.Random;
import java.awt.Container;
import java.awt.GridLayout;
import javax.swing.JFrame;
import javax.swing.JLabel;
public class JacobsHomeTimes extends JFrame{
	public JacobsHomeTimes(){
		setTitle("Workin Hard or Hardly Twerkin");
		Container contents = getContentPane();
		contents.setLayout(new GridLayout(2,0,100,30));
		contents.add(work1);
		contents.add(work2);
		contents.add(work3);
		contents.add(work4);
		contents.add(work5);
		contents.add(work6);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		pack();
	}
	private static final JLabel work1 = new JLabel("");
	private static final JLabel work2 = new JLabel("");
        private static final JLabel work3 = new JLabel("");
        private static final JLabel work4 = new JLabel("");
        private static final JLabel work5 = new JLabel("");
        private static final JLabel work6 = new JLabel("");
	public static void main(String[] args){
		JacobsHomeTimes jacobHasFun = new JacobsHomeTimes();
		jacobHasFun.setVisible(true);
		String[] armsAndChest = {"Normal-Push Ups","Wide-Push Ups","Tricep-Dips","Curls","Lifts","Pushes"};
		String[] core = {"Plank","Crunches","Sit Ups","Bicycle Crunches","Side-Planck","That spin thingy with the dumbells"};
		String[] legs = {"Squats","Lunges","Wall-sit"};
		work1.setText(picker(legs));
		work2.setText(picker(armsAndChest));
		work3.setText(picker(core));
		work4.setText(picker(legs));
		work5.setText(picker(armsAndChest));
		work6.setText(picker(core));
	}

	/*This method will take in an array and will return a random exercise from 
	 * this array */
	public static String picker(String[] exerciseArray){
		Random r = new Random();
		int arrayElement = r.nextInt(exerciseArray.length);
		return exerciseArray[arrayElement];
	}
}//end of class
