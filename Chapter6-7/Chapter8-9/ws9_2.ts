export{};

interface StorageService {
    save(data: string): void;
    load(): string;
}
abstract class Storage{
    protected data: string = "";
}

class CloudStorage extends Storage implements StorageService {
    save(data: string): void {
        this.data = data;
        console.log(`Saving '${data}' to Cloud Storage...`);
    }
    load(): string {
        return this.data;
    }
}

class LocalStorage extends Storage implements StorageService {
    save(data: string): void {
        this.data = data;
        console.log(`Saving '${data}' to Local...`);
    }
    load(): string {
        return this.data;
    }
}

// ทดสอบเทส 1 2 3
console.log("=== Workshop 9.2 ===");
const storage1 = new CloudStorage();
const storage2 = new LocalStorage();
storage1.save("User Profile");
storage2.load();
storage2.save("Game Save");
storage1.load();