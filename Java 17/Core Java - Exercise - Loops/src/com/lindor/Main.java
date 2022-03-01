package com.lindor;

public class Main {

    public static void main(String[] args) {
        // #1
        for (int i = 0; i < 10; i++) {
            System.out.println(i+1);
        }
        // #2
        for (int i = 0; i <= 100; i++) {
            System.out.println(i);
        }
        // #3
        int i = 0;
        do {
            System.out.println(i);
            i++;
        }
        while (i <= 10);
        // #4
        for (int j = 1; j <= 100; j++) {
            if (j >= 30 && j <= 70) {
                continue;
            } else if (j % 5 == 0)
                System.out.println(j);
        }
        // #5
        for (int k = 1; k <= 100; k++)
            if (k %5 == 0) {
                System.out.println(k);
        } else if (k >= 50) {
                break;
            }
        // #6

        System.out.printf("Week 1:\n");
        for (int l = 1; l <= 5; l++) {
            System.out.println("Day: " + l);
        }
        System.out.printf("\nWeek 2:\n");
        for (int m = 1; m <= 5; m++) {
            System.out.println("Day: " + m);
        }
        // #7

        // #8
        int count = 34;
        int num1 = 0;
        int num2 = 1;

        for (int p = 1; p <= count; p++) {
            System.out.println(num1);
            if (num1 == 34) {
                break;
            }

            int sumOfPrevTwo = num1 + num2;
            num1 = num2;
            num2 = sumOfPrevTwo;
        }
        // #9

    }
}
